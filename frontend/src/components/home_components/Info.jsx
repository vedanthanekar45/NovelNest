function Info() {
    return (
        <div className="features relative inline-flex bg-[#28a40f]">
            <div className="text-white text-xl text-center mt-20 feature-tile">
                <img src="/public/assets/open-book.png" className="feature-icon ml-3" />
                <h1 className="mt-4">Variety of categories <br></br>
                to go through</h1>
            </div>
            <div className="text-white text-xl text-center mt-20 feature-tile">
                <img src="/public/assets/verified-user.png" className="feature-icon ml-3" />
                <h1 className="mt-4">Verified users to <br></br>
                prevent scams</h1>
            </div>
            <div className="text-white text-xl text-center mt-20 feature-tile">
                <img src="/public/assets/pay.png" className="feature-icon ml-3" />
                <h1 className="mt-4">Safe and secure <br></br>
                payment system</h1>
            </div>
            <div className="text-white text-xl text-center mt-20 feature-tile">
                <img src="/public/assets/conversation.png" className="feature-icon ml-7" />
                <h1 className="mt-4">Engage in healthy <br></br>
                discussions from people <br></br>
                around the globe</h1>
            </div>
        </div>
    )
}

export default Info;