const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const commentBox = document.querySelector("#commentBox");
const STORAGE_KEY = "comments";
const comments = getSavedComments();

document.addEventListener("DOMContentLoaded", () => {
    comments.forEach(comment => {
        addCommentToPage(comment.userName, comment.commentText);
    });
});

function getSavedComments() {
    const savedComments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    return savedComments.filter(comment => {
        return comment.userName && comment.commentText;
    });
}

submit.addEventListener("keydown", handleSubmit);
submit.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    if (e.type === "keydown" && e.key !== "Enter") return;
    e.preventDefault();
    let comment = form.querySelector("#comment");
    let un = form.querySelector("#userName");
    if (comment.value.length < 1) {
        alert("Please fill out the comment field.");
        return;
    }
    else if (un.value.length < 1) {
        alert("Fill out the username.");
        return;
    }
    createComment(un.value, comment.value);
    un.value = "";
    comment.value = "";
}


const createComment = (userName, commentText) => {
    comments.push({
        userName,
        commentText
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    addCommentToPage(userName, commentText);
}

const addCommentToPage = (userName, commentText) => {
    let comment = document.createElement("div");
    comment.innerHTML = `<b><u>${userName}</u></b> said: <br /> ${commentText}`;
    comment.classList.add("comments");
    commentBox.append(comment);
}


