import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Project } from './project/project';
import { Form } from './form/form';
import { StringInterpolation } from './string-interpolation/string-interpolation';
import { Calculator } from './calculator/calculator';
import { Student } from './student/student';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { AdditionExample } from './addition-example/addition-example';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "about", component: About},
    // {path: "services", component: Services},
    // {path: "gallery", component: Gallery},
    // {path: "contact", component: Contact},
    {path: "project", component: Project},
    {path: "form", component : Form},
    {path: "interpolation", component :StringInterpolation},
    {path: "calculator", component :Calculator},
    {path: "student", component :Student},
{path: "registration", component :ReactiveForms},
{path: "reactive-addition", component :AdditionExample}

    
];
