export default function AppointmentTracker({user, setUser, render, allUsers, facilities, favFacility}) {

    const favFacility = async () => {
      axios
      .post(`http://localhost:5000/api/users/${user._id}`, {
        favFacility: 
    },
    { headers: { 'x-auth-token': localStorage.getItem('token') } })
    .then((res)=> {
        setUser(res.data)
    })
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