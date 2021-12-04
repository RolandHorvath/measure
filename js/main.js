function temp(){
    window.open('https://remus1998.github.io/ConverterGatherer/',"_self") 
}
function change(){
    var felvesz = document.getElementById('data').value;

    let s1 = document.getElementById('select1').value;
    let s2 = document.getElementById('select2').value;

    var elso = Number(felvesz);
    var m;
    
    let egyenlo="";
    // f s - betuk
    let f="";
    let s="";

    if(f!=null||s!=null){
        
    }
    if(s1==1){
        egyenlo="=";
        if(s2==1){m = elso;f = "km";s = "km";}//km-km
        if(s2==2){m = (elso*1000);f = "km";s = "m";}//km-m
        if(s2==3){m = (elso*10000);f = "km";s = "dm";}//km-dm
        if(s2==4){m = (elso*100000);f = "km";s = "cm";}//km-cm
        if(s2==5){m = (elso*1000000);f = "km";s = "mm";}//km-mm
        if(s2==6){m = (elso*1093.6133);f = "km";s = "yd";}//km-yd
        if(s2==7){m = (elso*0.621371192);f = "km";s = "mile";}//km-mile
    }else if(s1==2){
        egyenlo="=";
        if(s2==1){m = (elso*0.001);f = "m";s = "km";}//m-km
        if(s2==2){m = elso;f = "m";s = "m";}//m-m
        if(s2==3){m = (elso*10);f = "m";s = "dm";}//m-dm
        if(s2==4){m = (elso*100);f = "m";s = "cm";}//m-cm
        if(s2==5){m = (elso*1000);f = "m";s = "mm";}//m-mm
        if(s2==6){m = (elso*1.0936133);f = "m";s = "yd";}//m-yd
        if(s2==7){m = (elso*0.000621371192);f = "m";s = "mile";}//m-mile
    }else if(s1==3){
        egyenlo="=";
        if(s2==1){m = (elso*0.0001);f = "dm";s = "km";}//dm-km
        if(s2==2){m = (elso*0.1);f = "dm";s = "m";}//dm-m
        if(s2==3){m = elso;f = "dm";s = "dm";}//dm-dm
        if(s2==4){m = (elso*10);f = "dm";s = "cm";}//dm-cm
        if(s2==5){m = (elso*100);f = "dm";s = "mm";}//dm-mm
        if(s2==6){m = (elso*0.10936133);f = "dm";s = "yd";}//dm-yd
        if(s2==7){m = (elso*0.0000621371192);f = "dm";s = "mile";}//dm-mile
    }else if(s1==4){
        egyenlo="=";
        if(s2==1){m = (elso*0.00001);f = "cm";s = "km";}//cm-km
        if(s2==2){m = (elso*0.01);f = "cm";s = "m";}//cm-m
        if(s2==3){m = (elso*0.1);f = "cm";s = "dm";}//cm-dm
        if(s2==4){m = elso;f = "cm";s = "cm";}//cm-cm
        if(s2==5){m = (elso*10);f = "cm";s = "mm";}//cm-mm
        if(s2==6){m = (elso*0.010936133);f = "cm";s = "yd";}//cm-yd
        if(s2==7){m = (elso*0.00000621371192);f = "cm";s = "mile";}//cm-mile
    }else if(s1==5){
        egyenlo="=";
        if(s2==1){m = (elso*0.000001);f = "mm";s = "km";}//mm-km
        if(s2==2){m = (elso*0.001);f = "mm";s = "m";}//mm-m
        if(s2==3){m = (elso*0.01);f = "mm";s = "dm";}//mm-dm
        if(s2==4){m = (elso*0.1);f = "mm";s = "cm";}//mm-cm
        if(s2==5){m = elso;f = "mm";s = "mm";}//mm-mm
        if(s2==6){m = (elso*0.0010936133);f = "mm";s = "yd";}//mm-yd
        if(s2==7){m = (elso*0.000000621371192);f = "mm";s = "mile";}//mm-mile
    }else if(s1==6){
        egyenlo="=";
        if(s2==1){m = (elso*0.0009144);f = "yd";s = "km";}//yd-km
        if(s2==2){m = (elso*0.9144);f = "yd";s = "m";}//yd-m
        if(s2==3){m = (elso*9.144);f = "yd";s = "dm";}//yd-dm
        if(s2==4){m = (elso*91.44);f = "yd";s = "cm";}//yd-cm
        if(s2==5){m = elso*914.4;f = "yd";s = "mm";}//yd-mm
        if(s2==6){m = elso;f = "yd";s = "yd";}//yd-yd
        if(s2==7){m = (elso*0.000568181818);f = "yd";s = "mile";}//yd-mile
    }else if(s1==7){
        egyenlo="=";
        if(s2==1){m = (elso*0.000001);f = "mile";s = "km";}//mile-km
        if(s2==2){m = (elso*1609.344);f = "mile";s = "m";}//mile-m
        if(s2==3){m = (elso* 16093.44);f = "mile";s = "dm";}//mile-dm
        if(s2==4){m = (elso* 160934.4);f = "mile";s = "cm";}//mile-cm
        if(s2==5){m = elso* 1609344;f = "mile";s = "mm";}//mile-mm
        if(s2==6){m = (elso*1760);f = "mile";s = "yd";}//mile-yd
        if(s2==7){m = elso;f = "mile";s = "mile";}//mile-mile
    }

    document.getElementById('elso').innerText = `${elso.toFixed(2)} ${f} ${egyenlo} ${m.toFixed(2)} ${s}`;
    let v = parseInt(elso);
    //document.getElementById('');

}window.addEventListener('load',change);
