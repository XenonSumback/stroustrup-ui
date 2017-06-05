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
            body: data
          }).then((response) => {
            console.log(response)
            window.location.href = '/';
            var response = response.json()
          })
        },
    getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
      }
}
