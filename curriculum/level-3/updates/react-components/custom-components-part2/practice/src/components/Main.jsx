

function Main() {
    const username = "Menoko OG- Original Geek!"

    const userStyles = {
      backgroundColor: "blue",
      color: "pink",
      textAlign: "center",
      borderRadius: "10px"
    }

    return (
        <div className="main-content">
            {/* <Header />
            <Body />
            <Footer /> */}
            <h1 style={userStyles}>Hello, {username}</h1>
      <ol>
        <li>This is react !!! and  {username} loves it !!</li>
        <li>React is awesome !!!!!</li>
      </ol>
        </div>
    );
}

export default Main;