export default function FavFacility({
  user,
  setUser,
  render,
  allUsers,
  facilities,
  facility,
  setFacility,
  favorite,
  setFavorite,
}) {
  const favFacility = async () => {
    axios
      .post(
        `http://localhost:5000/api/users/${user._id}`,
        {
          favFacility: {
            name: facility.attributes.name,
            address: facility.attributes.address.physical.address_1,
            website: facility.attributes.website,
            phone: facility.attributes.phone.main,
          },
        },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      )
      .then((res) => {
        setFavorite(res.data);
      })
      .catch((error) => {
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
}
