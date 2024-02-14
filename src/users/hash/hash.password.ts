const bcrypt = require('bcryptjs');

export const hashPassword = async (input: string)=>{
    const salt = 20;
    const hashed = await bcrypt.hash(input, salt);
    return hashed
}

export const comparedHashed = async (inputPassword: string, dbPassword: string): Promise<Boolean>=>{
    return await bcrypt.compare(inputPassword, dbPassword);
   
}