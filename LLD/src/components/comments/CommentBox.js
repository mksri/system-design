import CommentItems from "./CommentItems";

const data = [
    {
        name: "Monika Srivastava",
        pic: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
        comment:"This is my first comment",
        replies: [
            {
                 name: "Nikhil Kaparaboina",
                 pic: "https://i.redd.it/snoovatar/avatars/95f04db7-a749-4ed2-8b13-a4cfb8b51bd8.png",
                 comment:"This is my first comment",
                 replies: [
                    {
                name: "Monika Prasad",
                pic: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
                comment:"This is my first comment",
                replies:[
                    {
                name: "Monika Srivastava",
                pic: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
                comment:"This is my first comment",
                    }
                ]
    },
                ]

            }
        ]
    },
    {
        name: "Nikhil Kaparaboina",
        pic: "https://i.redd.it/snoovatar/avatars/95f04db7-a749-4ed2-8b13-a4cfb8b51bd8.png",
        comment:"This is my first comment"

    },
    {
        name: "Monika Prasad",
        pic: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
        comment:"This is my first comment"
    },

];

const CommentBox = () =>{
    return(
        <div>
           <CommentItems data={data}/>
        </div>

    )
}

export default CommentBox;