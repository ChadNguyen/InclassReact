// import { useState, useEffect, createContext, useContext } from 'react'
// import { getFirestore, getDoc, getDocs, collection, doc, addDoc, Timestamp, collectionGroup, query } from '@firebase/firestore'
// import { AuthContext } from './AuthProvider'


// export const DataContext = createContext()

// export const DataProvider = function(props) {
//     const [posts, setPosts] = useState([])
//     const { user } = useContext(AuthContext)
//     const db = getFirestore()
//     console.log(posts)
//     useEffect (() => {
//         async function getPosts() {
//             const postQuery = query(collectionGroup(db, 'posts'))
//             const querySnapshot = await getDocs(postQuery)
//             const loadedPosts = []
//             querySnapshot.forEach((doc) => {
                // console.log(doc.ref.parent.parent)
//                 loadedPosts.push({
//                     id: doc.id,
                    // uid: doc.ref.parent.parent, 
//                     ...doc.data()
//                 })
//                 setPosts(loadedPosts)
//                 // console.log(doc.id, doc.data())
//             })
//             // const response = await fetch('https://cdn109-fakebook.onrender.com/api/posts')
//             // const data = await response.json()
//             // setPosts(data)
//         }
//         getPosts()
//     }, [])

//     async function getPost(id) {
//         // const response = await fetch(`https://cdn109-fakebook.onrender.com/api/post/${id}`)
//         // const data = await response.json()
//         // get a reference to our document
//         const docRef = doc(collection(db, 'posts', id))

//         // get a snapshot of information based on our reference
//         const docSnap = await getDoc(docRef);
//         return docSnap.data()
//             // if (docSnap.exists()) {
//             //     console.log("Document data:", docSnap.data());
//             // } else {
//             //     // doc.data() will be undefined in this case
//             //     console.log("No such document!");
//             // }
//         // return data    
//     }
//     // getPost()

//     async function getPokemonData(pokemonId) {
//         const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//         const data = await response.json()
//         return data
//     }

//     async function addPost(title, body) {
//         const newPost = {
//             title, // shorthand for title: title 
//             body,
//             dateCreated: Timestamp.now(),
//             userName: user.displayName
//         }

//         const docRef = await addDoc(collection(db, 'users', user.uid, 'posts'), newPost)
//         newPost.id = docRef.id
//         // update post to show on homepage right away
//         // ... = all of our old posts that us spread out
//         setPosts([
//             ...posts,
//             newPost
//         ])
//         return newPost
//     }
        
//     const value = {
//         // title: title is equivalent to:
//         posts,
//         getPost,
//         getPokemonData,
//         addPost
//     }

//     return (
//         <DataContext.Provider value={value}>
//             { props.children }
//         </DataContext.Provider>
//     )
// }