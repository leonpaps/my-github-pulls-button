if (document.getElementById('my-pull-request-tab') == null ){
    img = document.querySelector('.avatar.avatar-small.circle')
    const me = img.alt.replace("@", "")

    pullRequestsTab = document.querySelector("li > #pull-requests-tab")

    dup = pullRequestsTab.cloneNode()
    dup.id = "my-pull-request-tab"
    dup.href = dup.href + "/" + me

    pullRequestsTab.parentNode.insertBefore(dup, pullRequestsTab.nextSibling);

    dup.appendChild(img.cloneNode())
    dup.appendChild(document.createTextNode(" pulls/" + me ))
}
