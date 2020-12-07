import axios from 'axios'

export async function getAllUsers() {

    axios.get('http://40.76.135.193:3080/customers')
        .then(response => {return response.data.message;
            console.log(response.data.message);} );
    
}



export async function createUser(data) {
    const response = await fetch(`api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}