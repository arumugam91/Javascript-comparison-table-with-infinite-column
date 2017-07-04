"use strict";

document.addEventListener ('DOMContentLoaded', function () {
    var nextBtn = document.getElementsByClassName ("comparison-table-scroll-btn__next"), 
        prevBtn = document.getElementsByClassName ("comparison-table-scroll-btn__prev"), 
        comparisonTable = document.getElementsByClassName ("comparison-table"), 
        comparTableRow = document.getElementsByClassName ("comparison-table__row"), 
        comparTableCell = document.getElementsByClassName ("comparison-table__cell");
    var numOfColumns = null,
        cTableFirstCellWidth = null,
        cTableCellWidth = null,
        moveVal = 0,
        colToMove = 0;
    
    function getValues () {
        numOfColumns = comparTableRow[0].getElementsByClassName ("comparison-table__cell").length;
        cTableFirstCellWidth = comparTableCell[0].offsetWidth;
        cTableCellWidth = comparTableCell[1].offsetWidth;
    } getValues ();

    function moveColumn (dir) {
        /*var rowWidth = parseInt (comparTableRow[0].offsetWidth);
        var colMovedWidth = (parseInt (cTableCellWidth) * (colToMove)) + parseInt (cTableFirstCellWidth);*/
        if (dir === "next" && colToMove + 1 < numOfColumns - 1) {
            moveVal = (parseInt (moveVal) + (parseInt (cTableCellWidth) * -1)) + "px";
        } else if (dir === "prev" && colToMove > 0) {
            moveVal = (parseInt (moveVal) + parseInt (cTableCellWidth)) + "px";
        } else {
            moveVal = (parseInt (cTableCellWidth) * -colToMove) + "px";
        }

        for (var i = 0; i < comparTableCell.length; i++) {
            if (comparTableCell[i].previousElementSibling) {
                comparTableCell[i].style.left = "auto";
            }
        }

        for (var i = 0; i < comparTableCell.length; i++) {
            if (comparTableCell[i].previousElementSibling) {
                comparTableCell[i].style.left = moveVal;
            }
        }
        
        if (dir === "next" && colToMove + 1 < numOfColumns - 1) {
            colToMove++; 
        } else if (dir === "prev" && colToMove > 0) {
            colToMove--; 
        }
    } 

    nextBtn[0].addEventListener ('click', function () { moveColumn ("next"); });
    prevBtn[0].addEventListener ('click', function () { moveColumn ("prev"); });
    window.addEventListener ("resize", function () {
        getValues ();
        moveColumn ("");
    });
});