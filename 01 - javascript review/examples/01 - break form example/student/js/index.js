/*
Enter JS here


HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/


// 1. Select topic & new topic 

let topicList = document.querySelector(".topics-list");
let newTopicForm = document.querySelector(".new-topic-form");

// 5. create a function addTopicToPage that will take a name & list element
const addTopicToPage = (topicName, topicListElement) => {
    // 6a. create a new inner list elelment and update the HTML
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
    </li>`

    topicListElement.innerHTML += newTopicElement;
}

// 2. Add event listener , stop default from submit event 
newTopicForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        // 3. Grab input element & extract/store value
        let topicInput = event.target.elements["new-topic"]
        let newTopic = topicInput.value

        // 4. validation - check for empty, use bootstrap 
        if (newTopic === "") {
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }
        // 6b. dont forget to call a function inside
        addTopicToPage(newTopic, topicList);
    });