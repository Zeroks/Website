function ShowNotification({top = 0, right = 0, html, customClassName}) {
    let notification = document.createElement("div")
    notification.className = "notification"
    if (customClassName) {
        notification.classList.add(customClassName);
    }

    notification.style.top =  top + 'px';
    notification.style.right =  right + 'px';

    notification.innerHTML = html;

    document.body.append(notification);

    setTimeout (() => notification.remove(), time)
    
}


ShowNotification ({
    top: 10,
    right: 10,
    html: "Текст уведомления",
    customClassName: "BorderRadius",
    time: 10000
});