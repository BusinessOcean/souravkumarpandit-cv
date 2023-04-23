import React from 'react'

export default function ContactForm() {
    return (
        <div className="w-full grow-0">
            <div className="shadow bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Full Name</span>
                        </label>
                        <input type="text" className="input border-blacky-200 bg-blacky-100" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" className="input border-blacky-200 bg-blacky-100" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" className="input border-blacky-200 bg-blacky-100" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <input type="text" className="w-full h-40 text-start textarea textarea-bordered textarea-lg border-blacky-200 bg-blacky-100" />

                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
