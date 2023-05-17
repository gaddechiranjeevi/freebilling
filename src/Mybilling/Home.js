import { useEffect, useState } from "react";

const Home=()=>{

    let[billdata, updatebill]=useState([]);

    const getBilling = () => {

        let input = {
            "key": localStorage.getItem("Key")
        };
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/Billing/getmybill", requestOptions)
            .then(response => response.json())
            .then(data => {
                updatebill(data)
            })
    }

    useEffect(() => {
        getBilling();
    }, [1])

    let total1819=0;
    let total1920=0;
    let total2021=0;
    let total2122=0;
    let total2223=0;
    let total2324=0;


    billdata.filter((item)=>{
        if(item.year>=2018 && item.year<=2019){
            total1819 += parseInt(item.total);
        }
        if(item.year>=2019 && item.year<=2020){
            total1920 += parseInt(item.total);
        }
        if(item.year>=2020 && item.year<=2021){
            total2021 += parseInt(item.total);
        }
        if(item.year>=2021 && item.year<=2022){
            total2122 += parseInt(item.total);
        }
        if(item.year>=2022 && item.year<=2023){
            total2223 += parseInt(item.total);
        }
        if(item.year>=2023 && item.year<=2024){
            total2324 += parseInt(item.total);
        }
        
    })
    return(
        <div className="pt-5 pb-5 text-center">
             <h3 className="text-primary">Dashboard</h3>
             <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="bg-info rounded">
                            <div className="text-center text-light p-3">
                                <h4>2018-2019</h4>
                                <h6>Total Bill: {total1819}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info rounded">
                            <div className="text-center text-light p-3">
                                <h4>2019-2020</h4>
                                <h6>Total Bill: {total1920}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info rounded">
                            <div className="text-center text-light p-3">
                                <h4>2020-2021</h4>
                                <h6>Total Bill: {total2021}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info rounded">
                            <div className="text-center text-light p-3">
                                <h4>2021-2022</h4>
                                <h6>Total Bill: {total2122}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                <div className="col-lg-3">
                        <div className="bg-info rounded">
                            <div className="text-center text-light p-3">
                                <h4>2022-2023</h4>
                                <h6>Total Bill: {total2223}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info rounded">
                            <div className="text-center text-light p-3">
                                <h4>2023-2024</h4>
                                <h6>Total Bill: {total2324}</h6>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div> 
    )
}

export default Home;