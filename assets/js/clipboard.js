function copyToClipboard(elementId)
{
    var getString = document.createElement("input");
    getString.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(getString);
    getString.select();
    document.execCommand("copy");
    document.body.removeChild(getString);
    alert("복사 성공 ( ´▽｀)");
}