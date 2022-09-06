type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
    username: string;
    password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue) =>{
    return user.username === sentValue.username && user.password === sentValue.password
}

const dbUser = {username:'Pedro', password:'12345'}
const sentUser = {username:'Pedro', password:'12345'}
const logged = verifyUser(dbUser, sentUser);