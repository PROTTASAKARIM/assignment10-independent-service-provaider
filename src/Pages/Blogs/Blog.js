import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h2>Difference between authorization and authentication?</h2>
                <p><strong>Authorization:  </strong> Authorization is a process to identify who is the user is. Determines whether users are who they claim to be. Example:  If any user what to do shopping in a online store to confirm their order the user have to log in ore sign-in in the web site. This is because the web site must know who is giving this order. Order can not be given anonymously. In most off the cases to order from the web site the user must log in with their email and password so that the web site. </p>
                <p><strong>Authentication :  </strong> Usually authentication is done after successful authentication. Example: After a website determines who is the user is the website gives permission to order the products. In a website there can be many protected routes that can only be accessable to the user if web site grand authorization to the website. After determaining the user is authentic then the web site allows permission to the user to visits its protected routes. </p>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs(Software Development Kit), and ready-made UI libraries to authenticate users to our app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system. Usually a website get its auth from user email and password. </p>
                <p>Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                <p>There are many alternative of Firebase. Such as Back4App, Parse, AWS Amplify, Kuzzle ,Supabase etc</p>
                <h2>What other services does firebase provide other than authentication?</h2>
                <p>
                    There are many services which Firebase provides, Most useful of them are:
                </p>
                <ul className='mx-auto'>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>

                </ul>

            </div>

        </div>
    );
};

export default Blog;