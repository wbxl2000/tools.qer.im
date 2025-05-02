document.addEventListener('DOMContentLoaded', function() {
    // 加载共享header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('加载header时出错:', error));
}); 