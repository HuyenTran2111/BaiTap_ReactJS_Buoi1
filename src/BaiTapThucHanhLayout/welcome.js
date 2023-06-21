function Welcome() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="p-4 p-lg-5 bg-light text-center welcome">
                    <div className="m-4 m-lg-5">
                        <h1 className="texth1">A warm welcome!</h1>
                        <p className="textp">
                            Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                        </p>
                        <a href="#" className="btn btn-primary"> Call to action</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Welcome;