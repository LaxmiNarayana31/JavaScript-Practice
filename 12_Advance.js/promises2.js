// Timestamp -> 6:10:40  JS(Part-2)
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/LaxmiNarayana31')
//          // console.log(respone); 
//          const data = response.json()
//          console.log(data);
//     } catch (error) {
//      console.log('Error fetching', error);
//     }
//  }
//  getAllUsers()
 
 
 
 // Another way  to implement above fetch function
 fetch('https://api.github.com/users/LaxmiNarayana31')
     .then((response) => {
         return response.json()  // return response object in JSON format
     }).then((data) => {
         console.log(data);
     })
     .catch((error) => console.log(error))