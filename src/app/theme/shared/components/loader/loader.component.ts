import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/service/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  /* loading$: Observable<boolean>;
  constructor(private loaderService: LoaderService) { }
  ngOnInit(): void {
    // this.loading$ = this.loaderService.loading$; // Subscribe to loading state
  } */
  loading: boolean = true;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      /* setTimeout(() => { */
        this.loading = v;
      /* }, 0); */
    });
  }
  ngOnInit(): void {
    // this.loading$ = this.loaderService.loading$; // Subscribe to loading state
  }
}
