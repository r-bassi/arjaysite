import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Content, SideNavigation } from "side-navigation-react";
import { navItems, theme } from "./constants";
import { Work } from "../../pages/work";
import { About } from "../../pages/about";
import { Course } from "../../pages/course";
import { Keyboard } from "../../pages/keyboard";
import { Contact } from "../../pages/contact";

const App = () => (
  <Container>
      <SideNavigation
      heading={{
        title: 'Arjay Rafuse',
        route: '/home',
      }}
        navItems={navItems}
        navBackground={theme.navBackground}
        theme={theme.theme}
      />
    <Content>
      <Switch>
        {/* put your content here. */}
        <Route path="/about" component={ About } />
        <Route path="/work" component={ Work } />
        <Route path="/course" component={ Course } />
        <Route path="/keyboard" component={ Keyboard } />
        <Route path="/contact" component={ Contact } />
      </Switch>
    </Content>
  </Container>
);

export default App;
