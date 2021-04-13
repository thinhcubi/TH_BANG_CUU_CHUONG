let send,i,j;
send= "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (j=1;j<=9;j++) {
    send = send + "<tr>" ;
    for(i=1;i<=9;i++){
        send=send + "<td>"+ i + "x" + j + "=" + i * j + "</td>"
    }
    send= send +  "</tr>"
}
send = send + "</table>"
document.write(send);