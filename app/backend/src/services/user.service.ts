import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/users.model';
import { IUser } from '../interfaces/IUser';
import IToken from '../interfaces/IToken';
import IRole from '../interfaces/IRole';
import IDecoded from '../interfaces/IDecoded';

const JWT_SECRET = 'jwt_secret';

export default class UserService {
  private _userModel = UserModel;

  public async login(email: string, password:string): Promise<IToken | null> {
    const userFound = await this._userModel.findOne({ where: { email } }) as IUser;

    if (!userFound) return null;

    if (!bcrypt.compareSync(password, userFound.password)) return null;

    const { id } = userFound;
    const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' }) as unknown as IToken;
    return token as IToken;
  }

  public findRole = async (authorization: string): Promise<IRole> => {
    const decodedToken = jwt.decode(authorization) as IDecoded;
    const { id } = decodedToken;
    const userFound = await this._userModel.findOne({ where: { id }, raw: true }) as IUser;
    return userFound?.role as unknown as IRole;
  };
}
