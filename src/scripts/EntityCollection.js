let entitiesData =
{
  getEmployees: () => {
    return fetch("http://localhost:8088/employees", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(function (response) {
        return response.json()
      })
    // .then(function (json) {
    //   return (JSON.stringify(json))
    // })

  }
}
// export default entitiesData