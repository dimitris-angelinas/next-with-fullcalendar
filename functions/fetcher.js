const fetcher = async (url, options) => {

  let commonHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
  if(options?.drupalType){
    commonHeaders["Content-Type"] = "application/vnd.api+json"
  }
  if(options?.token){
    commonHeaders["Authorization"] = `Bearer ${options.token}`
  }

  /**
   * formData body does not need JSON.stringify
   * we don't mind if we have empty json body
   */
  let body = options?.formData ? options.formData : JSON.stringify(options?.body)
  let fetchOptions = {
    method: options?.method || "GET",
    body
  }

  /**
   * If we pass fetch as headers,
   * we just don't add headers at all
   * and let fetch add whatever it likes.
   * Works well with formData requests
   */
  if(options?.headers != 'fetch'){
    fetchOptions['headers'] = {...commonHeaders, ...options?.headers}
  }

  try {
    let res = await fetch(url, fetchOptions)
    if(res.status == 204){
      return true
    }
    return res.ok ?
        res.json() :
        Promise.reject({
          status: res.status,
          message: res.statusText,
          url: res.url
        })
  }
  catch (error) {
    return Promise.reject({
      message: error,
      url: url
    })
  }
}

export default fetcher;
