import { Routes } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { AddMotoComponent } from './add-moto/add-moto.component';
import { UpdateMotoComponent } from './update-moto/update-moto.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParModeleComponent } from './recherche-par-modele/recherche-par-modele.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { motoGuard } from './moto.guard';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { canActivateAuthRole } from './guards/auth-guard';
export const routes: Routes = [
    {path: "motos", component : MotosComponent,canActivate: [canActivateAuthRole],
data: { role: 'ADMIN' }

},
    {path: "add-moto", component : AddMotoComponent, canActivate:[motoGuard]},  
    {path: "updateMoto/:id",  component: UpdateMotoComponent},
    {path: "rechercheParMarque", component : RechercheParMarqueComponent},
    {path: "rechercheParModele", component : RechercheParModeleComponent},
    {path: "listeMarques", component : ListeMarquesComponent},
    {path:  'login', component: LoginComponent},
    {path:  'forbidden', component: ForbiddenComponent},
    {path:'register',component:RegisterComponent},
    { path: 'verifEmail', component: VerifEmailComponent },
    { path: 'profile', component: UserProfileComponent },
    {path: "", redirectTo: "motos", pathMatch: "full"}
];
