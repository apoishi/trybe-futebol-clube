import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import IUser from '../interfaces/IUser';
import IToken from '../interfaces/IToken';
import IRole from '../interfaces/IRole';
import HttpException from '../utils/http.exception';

const JWT_SECRET = 'jwt_secret';

export default class UserService {
  private _userModel = UserModel;

  public async login(email: string, password: string): Promise<string | null> {
    const userFound = await this._userModel.findOne({ where: { email }, raw: true }) as IUser;

    if (!userFound) return null;

    if (!bcrypt.compareSync(password, userFound.password)) return null;

    const token = jwt.sign(
      { id: userFound.id },
      JWT_SECRET,
      { expiresIn: '7d' },
    );
    return token;
  }

  public async tokenValidation(authorization: string): Promise<IRole> {
    const decodedToken = jwt.decode(authorization) as IToken;

    if (!decodedToken) throw new HttpException(401, 'UNAUTHORIZED', 'Token must be a valid token');

    const { id } = decodedToken;
    const userFound = await this._userModel.findOne({ where: { id }, raw: true }) as IUser;
    return userFound?.role as unknown as IRole;
  }
}
