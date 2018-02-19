import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OtherModule } from './other/other.module';

@NgModule({
	imports: [OtherModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: [],
	exports: [],
})
export class AppModule {}