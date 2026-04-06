const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/todos/1"
];
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (Math.random() < 0.3) {
                    reject(new Error("Random error"));
                } else {
                    resolve(data);
                }
            })
            .catch(err => reject(err));
    });
}
async function fetchAllData(urls) {
    let results = await Promise.allSettled(
        urls.map(url => fetchData(url))
    );
    const failedIndexes = results
        .map((res, index) => res.status === "rejected" ? index : -1)
        .filter(index => index !== -1);
    if (failedIndexes.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const retryPromises = failedIndexes.map(index =>
            fetchData(urls[index])
        );
        const retryResults = await Promise.allSettled(retryPromises);
        failedIndexes.forEach((index, i) => {
            results[index] = retryResults[i];
        });
    }
    return results;
}
fetchAllData(urls).then(results => console.log(results));