function calculate(BP) {
        var dr = 0.775;
        var drp = 0.759;
        //alert (dr);
        //alert(DA_DR);
        document.BP.DA_DR.value = dr;
        var bp = parseInt(document.BP.basic_pension.value);
        if (isNaN(bp) || bp < 1 || bp === ' ') {
            alert('Enter valid Basic Pension');
        }

        //var bp=document.getElementByID("basic_pension").value;
        //alert(bp);
        //var pp=(2/3)*bp
        //document.BP.PP.value=pp;
        //alert(pp);

        var gp = bp + bp * dr;
        document.BP.GPension.value = Math.ceil(gp);
        //alert(gp);
        var gpp = bp + bp * drp;

        document.BP.GOL.value = Math.ceil(gp - gpp);

        //alert(pp);

        //var drm= document.BP.DRM.value
        //alert (pp)
        //var dor1=document.BP.dor.value

        //alert(dr);
        //alert(DA_DR);
        //document.BP.DA_DR.value=dr;
        //0.760=document.BP.GOL.value
        //gp=document.BP.GPension.value
        //var gp=pp+(bp*dr);
        //document.BP.GPension.value=gp;
    }
    // </script>
