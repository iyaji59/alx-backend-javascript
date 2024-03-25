import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`First Name: ${user.firstName}, Last Name: ${user.lastName}, Photo: ${photo.body}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
