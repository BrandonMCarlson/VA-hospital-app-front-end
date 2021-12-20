export default function AppointmentTracker({setProfile, user, setUser, render, allUsers, user_id, facility, favFacility}) {

    const favFacility = async () => {
      axios
      .post(`http://localhost:5000/api/users/${user_id}`, {
        favFacility: 
    },
    { headers: { 'x-auth-token': localStorage.getItem('token') } })
    .then((res)=> {
        document.getElementById('put').value = ''
        setProfile(user)})
       .catch((error)=> {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    };