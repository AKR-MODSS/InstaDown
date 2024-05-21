const form = document.getElementById('downloadForm');
const usernameInput = document.getElementById('username');
const storiesContainer = document.getElementById('storiesContainer');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const stories = await fetchStories(username);
    renderStories(stories);
});

async function fetchStories(username) {
    // Use Instagram API to fetch stories for the given username
    // Implement this function using Instagram API
}

function renderStories(stories) {
    storiesContainer.innerHTML = '';
    stories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.innerHTML = `
            <img src="${story.imageUrl}" alt="${story.username}">
            <a href="${story.videoUrl}" download>Download Video</a>
        `;
        storiesContainer.appendChild(storyElement);
    });
}