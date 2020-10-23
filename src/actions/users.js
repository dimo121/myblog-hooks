import axios from 'axios';

export const setCurrentUser = ({
    id = '',
    name = ''
}) => ({
    type: 'CHANGE_ACTIVE_USER',
    user: {
        id,
        name
    }
});

export const startSetUser = (token) => {
    return (dispatch) => {
        return axios({
        url: 'http://localhost:3000/users/me',
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          dispatch(
              setCurrentUser({ id : response.data._id, name : response.data.name })
            );
        })
        .catch((error) => console.log(error));
    }
}

export const deleteCurrentUser = () => ({
    type: 'DELETE_USER',
})