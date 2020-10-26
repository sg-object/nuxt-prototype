export default function ({ $axios, $auth, redirect }) {
  $axios.setHeader('os', 'android')
  $axios.setHeader('version', '1.5')
  $axios.setHeader('isHistory', false)
  
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onResponseError(error => {
    let response = error.response
    if(response != undefined){
      alert(error.response.data.message);
    }
    return {
      error: true
    }
  })

  $axios.onResponse(response => {})

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
  })
}