
class RestfulAdapter {

  // const options =   {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  fetchProducts = () => {
    return fetch(`http://localhost:3000/api/v1/products`)
    .then(resp => resp.json())
  }
}

export default RestfulAdapter
