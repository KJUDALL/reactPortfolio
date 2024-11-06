function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;