import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../shared/products-list/products-list.component';

@Component({
  selector: 'app-products-viewer',
  templateUrl: './products-viewer.component.html',
  styleUrls: ['./products-viewer.component.scss'],
	providers: [ ProductsService ]  
})
export class ProductsViewerComponent implements OnInit {

  count: number = 0;
  offset: number = 0;
  limit: number = 2; // choose an appropriate number
	products: ProductModel[];
  loading: boolean = false;
  failed: boolean = false;

  constructor(
		private router: Router,
		private route: ActivatedRoute,    
		private productsService: ProductsService
  ) { }

  ngOnInit() {
		let observable = this.route.params
		  .map(params => params['nr'])
			.map(pageNr => (pageNr - 1) * this.limit);
		observable.subscribe(offset => this.offset = offset);
		observable.share().subscribe(offset => this.getAll(offset, this.limit));
  }

	getAll(offset: number, limit: number) {
	  console.log("ProductsViewerComponent - getAll, offset = ", offset, " limit = ", limit);
		this.products = [];
		this.loading = true;
		this.failed = false;
		this.productsService.getAll(offset, limit).subscribe(result => {
			//this.products = result.products;
			//this.count = result.count;
	    console.log("ProductsViewerComponent - getAll - result = ", result);
			// ADDED TO TEMPORARILY OVERWRITE THE products
			// this.products = [
			// 	new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(2, "Poka stanitsa spit", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(3, "Memory Lane", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(4, "No Through Road", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(5, "Malcolm & Eddie", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(6, "Violet", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(7, "Last Call with Carson Daly", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(8, "The Yellow Badge of Courage", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(9, "Doctor Who: The Companion Chronicles", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(10, "The Feed", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(11, "Emmerdale Farm", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(12, "The Jeselnik Offensive", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(13, "Zero Minute", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(14, "Nina and the Neurons Go Inventing", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(15, "Dynamo", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(16, "Ammattimies", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(17, "Happening Now", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(18, "The O'Reilly Factor", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(19, "How Do I Look?", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(20, "Electric Playground", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(21, "Commissaire Laviolette", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(22, "The Young Doctors", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(23, "Married with Children", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(24, "Le clan Pasquier", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(25, "The Gale Storm Show: Oh! Susanna", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(26, "Serangoon Road", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(27, "The Young Doctors", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(28, "Family Matters", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(29, "Motormouth", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(30, "Antiques Roadshow", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(31, "Wasak", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(32, "Prime News", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(33, "May bukas pa", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(34, "The Hollywood Squares", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(35, "Els matins a TV3", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(36, "Your Favorite Story", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(37, "Los desayunos de TVE", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(38, "The Small House at Allington", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(39, "Minute to Win It", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(40, "El ministerio del tiempo", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(41, "The Fabulous Picture Show", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(42, "Black Jack", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(43, "Cutting Edge", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(44, "Judge Joe Brown", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(45, "All Saints", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(46, "Quincy M.E.", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(47, "Neighbours", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(48, "Chistoserdechnoe priznanie", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(49, "John Halifax, Gentleman", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(50, "Paul Flynn", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(51, "Texas Monthly Talks", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(52, "David Copperfield", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(53, "Obruchalnoe koltso", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(54, "Rock Macabre", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(55, "The Tonight Show Starring Johnny Carson", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(56, "Daesh molodezh", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(57, "Wicked Wicked Games", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(58, "Music Fair", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(59, "Flip My Food with Chef Jeff", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(60, "Un hombre solo", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(61, "My S Rostova", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(62, "Zwei bei Kallwass", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(63, "Last Call with Carson Daly", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(64, "Jimmy Kimmel Live!", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(65, "Plebs", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(66, "Lonelygirl15", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(67, "Plus belle la vie", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(68, "Watch What Happens: Live", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(69, "WRAL Murder Trials", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(70, "Secrets of the Bible", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(71, "Six O'Clock News", "http://www.imdb.com", "Completed"),
			// 	new ProductModel(72, "Jackie Gleason: American Scene Magazine", "http://www.imdb.com", "Completed")
			// ];
	    this.products = result['products']; // ORIGINAL result['products'];
			console.log("ProductsViewerComponent - getAll - this.products = ", this.products);
	    this.count = result['count'];
			console.log("ProductsViewerComponent - getAll - this.count = ", this.count);		
			this.loading = false;
		}, () => {
			this.loading = false;
			this.failed = true;
		});
	}

	viewProduct(productId: number) {
		console.log("ProductsViewerComponent - viewProduct called with productId = ", productId);
// TEMP COMMENTED OUT		this.router.navigate(['product', productId]);
	}

	editProduct(productId: number) {
		console.log("ProductsViewerComponent - editProduct called with productId = ", productId);
// TEMP COMMENTED OUT		this.router.navigate(['product', productId, 'edit']);
	}

  onPageChange(offset) {
    this.offset = offset;
    this.router.navigate(['/page', (offset / this.limit) + 1]);
  }

}
