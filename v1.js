function fetchWithTimeout(url, timeout) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timeout")), timeout)
        )
    ]);
}
async function fetchData() {
    const results = await Promise.allSettled([
        fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000),
        fetchWithTimeout("https://jsonplaceholder.typicode.com/users/1", 3000)
    ]);

    return results.map(result => {
        if (result.status === "rejected" && result.reason.message === "Request timeout") {
            return "Request timeout";
        }
        return result;
    });
}
fetchData().then(console.log);