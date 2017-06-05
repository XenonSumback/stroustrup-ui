module.exports = {
    login(username, pass) {
        var userInfo = {
            username: username,
            password: pass
        }
        var data = module.exports.getFormData(userInfo)
        fetch('http://127.0.0.1:8000/login/',{
            method: 'POST',
            mode:'no-cors',
            credentials: "include",
            /*headers: {
              'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
              'Content-Type': 'multipart/form-data; charset=utf-8'
            },*/
            body: data
          }).then((response) => {
            console.log(response.body)
            window.location.href = '/';
            response.json()
          })
        },
    getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
      }
}
