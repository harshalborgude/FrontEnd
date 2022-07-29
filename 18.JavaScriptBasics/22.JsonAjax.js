/*

******* JSON ********
1) In web app , input data can be converted into JSON object and using stringify , json object can be converted into
    String , and vice a versa can be done on server side , that string can be converted into json again using 
    JSON.parse(string)


****** AJAX ********
1) problem of completely refreshing page can be avoided by refreshing data in small chunks , That can be done
    using AJAX.
    - It can update the page without loading whole page.
2) Using fetch we can request small chunk of data.Fetch API allows to do AJAX call.
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=> Response.json())
    .then(users=> this.setState({ robots: users }))

    - This whole request is a AJAX request.
    - after request,it will return promise object , so .then() method will get the response ofrequest after 
        promise method.


***** Promise *****
1) A promise is an object that may produce a single value some time in the future.Either a result value 
    or a reson that its not resolved (rejected)
    - Promise can have 3 values - fullfill , rejected , pending.



*/