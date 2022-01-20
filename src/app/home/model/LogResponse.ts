export class LoginResponse{
  constructor(
    public  email : string ="?",
    public  ok : boolean = false,
    public  message : string ="?",
    public  token : string ="?" ){}
}
