import { Module } from '@nestjs/common';
import { CategoriaVacantesModule } from './CategoriaVacante/CatVac.module';
import { DocumentoModule } from './Documentos/Doc.module';
import { EducacionModule } from './Educacion/Educ.module';
import { PuestoSolicitadoModule } from './PuestoSolicitado/PuSo.module';
import { ExperienciaLaboralModule } from './ExperienciaLaboral/ExLa.module';
import { FormacionComplementariaModule } from './FormacionComplementaria/ForCom.module';
import { IdiomaModule } from './Idioma/Idioma.module';
import { ImagenModule } from './Imagen/Imagen.module';
import { InformePerfilModule } from './InformePerfil/InfPer.module';
import { PeriodoModule } from './PeriodoVacante/Periodo.module';
import { ReferenciasLaboralesModule } from './ReferenciasLaborales/RefLab.module';
import { ReferenciasPersonalesModule } from './ReferenciasPersonales/RefPer.module'; 
import { SuscripcionModule } from './Suscripcion/Suscripcion.module';
import { VacantesModule } from './Vacantes/Vacantes.module';
import { UsuarioModule } from './Usuario/Usuario.module';
import { CorreoModule } from './Correo/Correo.module';
import { MostrarPDFModule } from './MostrarPdf/MostrarPdf.module';
import { LoginModule } from './Login/Login.module';

@Module({
  imports: [
    CategoriaVacantesModule,
    DocumentoModule,
    EducacionModule,
    PuestoSolicitadoModule,
    ExperienciaLaboralModule,
    FormacionComplementariaModule,
    IdiomaModule,
    ImagenModule,
    InformePerfilModule,
    PeriodoModule,
    ReferenciasLaboralesModule,
    ReferenciasPersonalesModule,
    SuscripcionModule,
    VacantesModule,
    UsuarioModule,
    CorreoModule,
    MostrarPDFModule,
    LoginModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
