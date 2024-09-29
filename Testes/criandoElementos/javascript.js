/* Header */

header = document.createElement("header")
document.body.appendChild(header)


header = document.getElementsByTagName("header")
header.style.display = "flex"
containerPrincipal.style.justifyContent = "space-between"

logo = document.createElement(img)
logo.setAttribute("href", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYljG6pAjExjZJMrsw3-ZpcnPbuRji049YQ&s")
header.appendChild(logo)