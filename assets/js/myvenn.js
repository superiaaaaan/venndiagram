$(document).ready(function() {

    // $('body').on('click', function() {
    //     $('.sel_opr').removeAttr('checked');
    // });

    var chart = venn.VennDiagram()
    .styled(false);

    d3.select("#venn")
        .datum([{sets: ['A'], size: 300, label : ' '},
            {sets: ['B'], size: 300, label : ' '}
            ])
    .call(chart);

    var seta_elements = " ";
    var setb_elements = " ";
    var setc_elements = " ";

    var seta = [];
    var setb = [];
    var setc = [];

    var ua = [];
    var ub = [];
    var uc = [];
    var ab = [];
    var ac = [];
    var bc = [];
    var abc = [];



    var numberofset = 2;
    var operation = "";
    var suboperation = "";

    $('#setcdiv').hide();


    $('.setnum').on('change', function() {
        $('.setnum').removeAttr('checked');
        $(this).attr('checked', 'true');
        if($('#setnum2').attr('checked'))
        {
            var seta_elements = " ";
            var setb_elements = " ";
            var setc_elements = " ";

            var seta = [];
            var setb = [];
            var setc = [];

            var ua = [];
            var ub = [];
            var uc = [];
            var ab = [];
            var ac = [];
            var bc = [];
            var abc = [];

            numberofset = 2;
            $('#setcdiv').hide();

            var chart = venn.VennDiagram()
            .styled(false);

            d3.select("#venn")
                .datum([{sets: ['A'], size: 300, label : ' '},
                    {sets: ['B'], size: 300, label : ' '}
                    ])
            .call(chart);

            
        }
        if($('#setnum3').attr('checked'))
        {
            var seta_elements = " ";
            var setb_elements = " ";
            var setc_elements = " ";

            var seta = [];
            var setb = [];
            var setc = [];

            var ua = [];
            var ub = [];
            var uc = [];
            var ab = [];
            var ac = [];
            var bc = [];
            var abc = [];

            numberofset = 3;
            $('#setcdiv').show();
                var chart = venn.VennDiagram()
                .styled(false);

                d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ' '},
                        {sets: ['B'], size: 300, label : ' '},
                        {sets: ['C'], size: 300, label : ' '}
                        ])
                .call(chart);

            
        }
    })

    $('.btnset').on('click', function() {
        var set = $(this).attr('set-target')
        var e = $('#' + set).val();

        $('#' + set).focus();
        if(e)
        {
            if(set == 'seta')
            {
                if(seta.length < 20)
                {
                    seta.push(e);
                }
                else
                {
                    swal({
                      title: "Oops!",
                      text: "Maximum number of elements in every set is 20",
                      icon: "error",
                      button: "Ok",
                    });
                }
            }
            else if(set == 'setb')
            {
                if(setb.length < 20)
                {
                    setb.push(e);
                }
                else
                {
                    swal({
                      title: "Oops!",
                      text: "Maximum number of elements in every set is 20",
                      icon: "error",
                      button: "Ok",
                    });
                }
            }
            else if(set == 'setc')
            {
                if(setc.length < 20)
                {
                    setc.push(e);
                }
                else
                {
                    swal({
                      title: "Oops!",
                      text: "Maximum number of elements in every set is 20",
                      icon: "error",
                      button: "Ok",
                    });
                }
            }
            else
            {
                alert('Invalid');
            }

            $('#' + set).val('');
            populate();
      
        }
        else
        {
            swal({
                  title: "Oops!",
                  text: "Please enter an element",
                  icon: "error",
                  button: "Ok",
                });
        }


    });

    $('.sel_opr').on('change', function() {
        $(this).attr('checked', 'true');

        generate();
    });



    $('#refresh').on('click', function() {
        swal({
          title: "Reset ?",
          text: "Elements will reset",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            location.reload();
          } else {
          }
        });
    });

    function populate()
    {


        var seta_elements = " ";
        var setb_elements = " ";
        var setc_elements = " ";
        
        seta.forEach(e => {
            seta_elements += e + ' ';
        });
        setb.forEach(e => {
            setb_elements += e + ' ';
        });
        setc.forEach(e =>{
            setc_elements += e + ' ';
        });

        

        if(numberofset == 2)
        {
            var chart = venn.VennDiagram()
            .styled(false);
            d3.select("#venn")
            .datum([{sets: ['A'], size: 300, label : seta_elements},
                {sets: ['B'], size: 300, label : setb_elements}
                ])
        .call(chart);
        }
        else
        {
            var chart = venn.VennDiagram()
            .styled(false);
            d3.select("#venn")
            .datum([{sets: ['A'], size: 300, label : seta_elements},
                {sets: ['B'], size: 300, label : setb_elements},
                {sets: ['C'], size: 300, label : setc_elements}
                ])
        .call(chart);
        }

        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

        

    }

    function generate()
    {
        var ua = [];
        var ub = [];
        var uc = [];
        var ab = [];
        var ac = [];
        var bc = [];
        var abc = [];

        var ua_elements = " ";
        var ub_elements = " ";
        var uc_elements = " ";
        var aub_elements = " ";
        var auc_elemennts = " ";
        var buc_elements = " ";
        var abc_elements = " ";


        loop3 : for (let x = 0; x <= seta.length - 1; x++) {

            loop2 : for (let y = 0; y <= setb.length - 1; y++) { // CHECK if element in set a is existing in set b
                if(seta[x] == setb[y])
                {
                    
                    var num = 0;
                    loop1 : for (let z = 0; z <= setc.length - 1; z++) { // if a = b = c
                        if(seta[x] == setc[z])
                        {
                            num += 1;
                        }
                    }
                    if(num > 0)
                    {
                        abc.push(seta[x]); // Adding elements in A U B U C
                    }
                    else
                    {
                        ab.push(seta[x]); // Adding elements in A U B
                    }
                }
            }
        }

        // A U C
        loopc : for (let x = 0; x <= setc.length - 1; x ++)
        {
            var numc = 0;
            for (let y = 0; y <= setb.length - 1; y ++) // Check if element c is exsisting in b
            {
                if(setc[x] == setb[y])
                {
                    numc += 1;
                }
            }

            if(numc == 0)
            {
                var numc1 = 0;
                for(let z = 0; z <= seta.length - 1; z ++) // Checki if c = a
                {
                    if(setc[x] == seta[z])
                    {
                        numc1 += 1;
                    }
                }

                if(numc1 > 0 )
                {
                    ac.push(setc[x]); // Add element in c
                }
            }
        }

        // B U C
        loopc : for (let x = 0; x <= setc.length - 1; x ++)
        {
            var numc = 0;
            for (let y = 0; y <= seta.length - 1; y ++) // Check if element c is exsisting in a
            {
                if(setc[x] == seta[y])
                {
                    numc += 1;
                }
            }

            if(numc == 0)
            {
                var numc1 = 0;
                for(let z = 0; z <= setb.length - 1; z ++) // Checki if c = b
                {
                    if(setc[x] == setb[z])
                    {
                        numc1 += 1;
                    }
                }

                if(numc1 > 0 )
                {
                    bc.push(setc[x]); // Add element in c
                }
            }
        }

        var allset = ab.concat(ac,bc,abc);

        // Get unique in every set

        for(let x = 0; x <= seta.length - 1; x++) {
            var num = 0;
            for(let y = 0; y <= allset.length - 1; y++) {
                if(seta[x] == allset[y])
                {
                    num += 1;
                }
            }
            if(num == 0)
            {
                ua.push(seta[x]);
            }
        }

        for(let x = 0; x <= setb.length - 1; x++) {
            var num = 0;
            for(let y = 0; y <= allset.length - 1; y++) {
                if(setb[x] == allset[y])
                {
                    num += 1;
                }
            }
            if(num == 0)
            {
                ub.push(setb[x]);
            }
        }

        for(let x = 0; x <= setc.length - 1; x++) {
            var num = 0;
            for(let y = 0; y <= allset.length - 1; y++) {
                if(setc[x] == allset[y])
                {
                    num += 1;
                }
            }
            if(num == 0)
            {
                uc.push(setc[x]);
            }
        }

        console.log("All set");
        allset.forEach(e => {
            console.log(e);
        });

        console.log("U A");
        ua.forEach(e =>{
            console.log(e);
            ua_elements += e + " ";
        });

        console.log("U B");
        ub.forEach(e =>{
            console.log(e);
            ub_elements += e + " ";
        });

        console.log("U C");
        uc.forEach(e =>{
            console.log(e);
            uc_elements += e + " ";
        });

        console.log("A U B");
        ab.forEach(e =>{
            console.log(e);
            aub_elements += e + " ";
        });

        console.log("A U C");
        ac.forEach(e => {
            console.log(e);
            auc_elemennts += e + " ";
        });

        console.log("B U C");
        bc.forEach(e => {
            console.log(e);
            buc_elements += e + " ";
        });

        console.log("A U B U C");
        abc.forEach(e => {
            console.log(e);
            abc_elements += e + " ";
        });


        var chart = venn.VennDiagram()
        .styled(false);

        var selected = $("input[type='radio'][name='opr']:checked");
        if (selected.length > 0) {
            operation = selected.attr("operation");
        }
        
        if(numberofset == 2)
        {
            if(operation == "union")
            {
                d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements}
                        ])
                .call(chart);
                $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                $('[data-venn-sets="B"]').css("fill", "rgba(49, 176, 213, 0.73)");
                $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
               
                setTimeout(function(){
                    d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements},
                        {sets: ['A', 'B'], size: 100, label : aub_elements}
                        ])
                .call(chart);
                }, 1500);


                    
            }
            else if(operation == "intersection")
            {
                d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements}
                        ])
                .call(chart);
                $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");


                setTimeout(function(){
                    d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements},
                        {sets: ['A', 'B'], size: 100, label : aub_elements}
                        ])
                    .call(chart);
                    $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.16)");
                    $('[data-venn-sets="B"]').css("fill", "rgba(49, 176, 213, 0.16)");
                    $('[data-venn-sets="A_B"]').css("fill", "rgba(49, 176, 213, 0.80)");
                }, 1500);
                
            }
            else if(operation == "difference")
            {
                
                d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements}
                        ])
                .call(chart);
                $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");


                setTimeout(function(){
                    d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements},
                        {sets: ['A', 'B'], size: 100, label : aub_elements}
                        ])
                    .call(chart);
                    $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                    $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                    $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                }, 1500);

            }
            else if(operation == "complement")
            {   
                swal("Please select set", {
                  buttons: {
                    cancel: "Cancel",
                    a: {
                      text: "SET A",
                      value: "a",
                    },
                    b: {
                      text: "SET B",
                      value: "b",
                    }
                  },
                })
                .then((value) => {
                  switch (value) {
                 
                    case "a":
                          d3.select("#venn")
                        .datum([{sets: ['A'], size: 300, label : ua_elements},
                            {sets: ['B'], size: 300, label : ub_elements}
                            ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.7294117647058823)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");


                        setTimeout(function(){
                            d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['A', 'B'], size: 100, label : aub_elements}
                                ])
                            .call(chart);
                            $('[data-venn-sets="A"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                        }, 1500);
                      break;
                 
                    case "b":
                      d3.select("#venn")
                        .datum([{sets: ['A'], size: 300, label : ua_elements},
                            {sets: ['B'], size: 300, label : ub_elements}
                            ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.7294117647058823)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");


                        setTimeout(function(){
                            d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['A', 'B'], size: 100, label : aub_elements}
                                ])
                            .call(chart);
                            $('[data-venn-sets="A"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                        }, 1500);
                      break;
                 
                    default:
                        populate();
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");

                        $(this).removeAttr('checked');
                        $('#defaultopr').attr('checked', 'true');

                      }
                });
            }
            else if(operation == "symdifference")
            {
                d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements}
                        ])
                .call(chart);
                $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");


                setTimeout(function(){
                    d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : ua_elements},
                        {sets: ['B'], size: 300, label : ub_elements},
                        {sets: ['A', 'B'], size: 100, label : aub_elements}
                        ])
                    .call(chart);
                    $('[data-venn-sets="A"]').css("fill", "rgba(68, 157, 68, 0.73)");
                    $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                    $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                }, 1500);
            }
            else
            {
                var seta_elements = " ";
                var setb_elements = " ";
                var setc_elements = " ";
                
                seta.forEach(e => {
                    seta_elements += e + ' ';
                });
                setb.forEach(e => {
                    setb_elements += e + ' ';
                });
                setc.forEach(e =>{
                    setc_elements += e + ' ';
                });


                d3.select("#venn")
                    .datum([{sets: ['A'], size: 300, label : seta_elements},
                        {sets: ['B'], size: 300, label : setb_elements}
                        ])
                .call(chart);
                $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
            }
            
        }
        else
        {
            if(operation == "union")
            {
                swal("Please select set", {
                  buttons: {
                    
                    ab: {
                      text: "SET A & B",
                      value: "ab",
                    },
                    ac: {
                      text: "SET A & C",
                      value: "ac",
                    },
                    bc: {
                      text: "SET B & C",
                      value: "bc",
                    },
                    abc: {
                      text: "SET A & B & C",
                      value: "abc",
                    },
                    cancel: "Cancel"
                  },
                })
                .then((value) => {
                  switch (value) {
                 
                    case "abc":
                        d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements},
                                    {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                 
                    case "ab":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.20)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    case "ac":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.20)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                      case "bc":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.20)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    default:

                        populate();
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");

                        $(this).removeAttr('checked');
                        $('#defaultopr').attr('checked', 'true');

                      }
                });

            }
            else if(operation == "intersection")
            {
                swal("Please select set", {
                  buttons: {
                    
                    ab: {
                      text: "SET A & B",
                      value: "ab",
                    },
                    ac: {
                      text: "SET A & C",
                      value: "ac",
                    },
                    bc: {
                      text: "SET B & C",
                      value: "bc",
                    },
                    abc: {
                      text: "SET A & B & C",
                      value: "abc",
                    },
                    cancel: "Cancel"
                  },
                })
                .then((value) => {
                  switch (value) {
                 
                    case "abc":
                        d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements},
                                    {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.20)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.20)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.20)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                 
                    case "ab":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.20)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    case "ac":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.20)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                      case "bc":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.20)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    default:
                        populate();
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        $(this).removeAttr('checked');
                        $('#defaultopr').attr('checked', 'true');

                      }
                });
            }
            else if(operation == "difference")
            {
                
                swal("Please select set", {
                  buttons: {
                    
                    ab: {
                      text: "SET A & B",
                      value: "ab",
                    },
                    ac: {
                      text: "SET A & C",
                      value: "ac",
                    },
                    bc: {
                      text: "SET B & C",
                      value: "bc",
                    },
                    abc: {
                      text: "SET A & B & C",
                      value: "abc",
                    },
                    cancel: "Cancel"
                  },
                })
                .then((value) => {
                  switch (value) {
                 
                    case "abc":
                        d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");

                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements},
                                    {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                        }, 1500);
                      break;
                 
                    case "ab":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.20)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    case "ac":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.20)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                      case "bc":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.20)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    default:
                        populate();
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        $(this).removeAttr('checked');
                        $('#defaultopr').attr('checked', 'true');

                      }
                });

            }
            else if(operation == "complement")
            {   
                swal("Please select set", {
                  buttons: {
                    cancel: "Cancel",
                    a: {
                      text: "SET A",
                      value: "a",
                    },
                    b: {
                      text: "SET B",
                      value: "b",
                    },
                    c: {
                      text: "SET C",
                      value: "c",
                    }
                  },
                })
                .then((value) => {
                  switch (value) {
                 
                    case "a":
                         d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements},
                                    {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                        }, 1500);
                      break;
                 
                    case "b":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        setTimeout(function(){
                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements},
                                    {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
                                    ])
                            .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                        }, 1500);
                      break;

                      case "c":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        setTimeout(function(){
                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements},
                                    {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
                                    ])
                            .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                        }, 1500);
                      break;
                 
                    default:
                        populate();

                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        $(this).removeAttr('checked');
                        $('#defaultopr').attr('checked', 'true');

                      }
                });
            }
            else if(operation == "symdifference")
            {
                swal("Please select set", {
                  buttons: {
                    
                    ab: {
                      text: "SET A & B",
                      value: "ab",
                    },
                    ac: {
                      text: "SET A & C",
                      value: "ac",
                    },
                    bc: {
                      text: "SET B & C",
                      value: "bc",
                    },
                    abc: {
                      text: "SET A & B & C",
                      value: "abc",
                    },
                    cancel: "Cancel"
                  },
                })
                .then((value) => {
                  switch (value) {
                 
                    case "abc":
                        d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements},
                                    {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(236, 151, 31, .75)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(236, 151, 31, .75)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(236, 151, 31, .75)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                        }, 1500);
                      break;
                 
                    case "ab":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'B'], size: 100, label : aub_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(49, 176, 213, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.20)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    case "ac":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['A', 'C'], size: 100, label : auc_elemennts}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.20)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                      case "bc":
                      d3.select("#venn")
                            .datum([{sets: ['A'], size: 300, label : ua_elements},
                                {sets: ['B'], size: 300, label : ub_elements},
                                {sets: ['C'], size: 300, label : uc_elements},
                                ])
                        .call(chart);
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");


                        setTimeout(function(){

                            d3.select("#venn")
                                .datum([{sets: ['A'], size: 300, label : ua_elements},
                                    {sets: ['B'], size: 300, label : ub_elements},
                                    {sets: ['C'], size: 300, label : uc_elements},
                                    {sets: ['C', 'B'], size: 100, label : buc_elements}
                                    ])
                            .call(chart);

                            $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.20)");
                            $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="C"]').css("fill", "rgba(68, 157, 68, 0.73)");
                            $('[data-venn-sets="A_B"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="A_C"]').css("fill", "rgba(0, 0, 0, 0)");
                            $('[data-venn-sets="C_B"]').css("fill", "rgba(255, 255, 255, 1)");
                            $('[data-venn-sets="A_C_B"]').css("fill", "rgba(255, 152, 0, .73)");
                        }, 1500);
                      break;
                    default:
                        populate();
                        $('[data-venn-sets="A"]').css("fill", "rgba(49, 176, 213, 0.73)");
                        $('[data-venn-sets="B"]').css("fill", "rgba(68, 157, 68, 0.73)");
                        $('[data-venn-sets="C"]').css("fill", "rgba(201, 48, 44, 0.73)");

                        $(this).removeAttr('checked');
                        $('#defaultopr').attr('checked', 'true');

                      }
                });
            }
            else
            {
                populate();
                
            }
        }

        


    } // end function



	
});
// d3.select("#venn")
//             .datum([{sets: ['A'], size: 300, label : ua_elements},
//                 {sets: ['B'], size: 300, label : ub_elements},
//                 {sets: ['C'], size: 300, label : uc_elements},
//                 {sets: ['A', 'B'], size: 100, label : aub_elements},
//                 {sets: ['A', 'C'], size: 100, label : auc_elemennts},
//                 {sets: ['C', 'B'], size: 100, label : buc_elements},
//                 {sets: ['A', 'C', 'B'], size: 100, label : abc_elements}
//                 ])
//         .call(chart);






























































































































































/*
    All rights reserved
    Ian Luis B. Cobarrubias
    Thank me later. :')
*/




