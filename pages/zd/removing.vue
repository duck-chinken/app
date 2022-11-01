<template>
	<view class="content">
		<cu-custom bgColor="head2" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">{{$t('下架')}}</block>
		</cu-custom>

		<view class="Search" style="height: 90px;">
			<input type="text" :focus="isFocus1" v-model="query01" @confirm="getDetails" :placeholder="$t('pages.请扫描单号')" />
			<image class="clear" src="../../static/ZX/clear.png" mode="" @click="close" v-show="query01"></image>
			<input type="text" :focus="isFocus2" v-model="query02" @confirm="getDetails" :placeholder="$t('pages.请扫描产品编码')"
				style="margin-top:10rpx;" />
		</view>

		<scroll-view scroll-y="true" style="flex: 1;overflow: auto;" @scrolltolower='scroll'>
			<view class="body_t" v-for="(item,index) in data" :key='index'>
				<view class="item">
					<view>{{$t('pages.产品名称')}}：</view>
					<view style="color: #2D2F2E;max-width: 70%;">{{item.shpMingCheng}}</view>
				</view>
				
				<view class="item">
					<view>{{$t('pages.产品编码')}}：</view>
					<view style="color: #2D2F2E;max-width: 70%;">{{item.goodsId}}</view>
				</view>
				
				<view class="item">
					<view>{{$t('pages.生产日期')}}：</view>
					<view style="color: #2D2F2E;max-width: 70%;">{{item.goodsProData}}</view>
				</view>
				
				<view class="item">
					<view>{{$t('pages.客户编码')}}：</view>
					<view style="color: #2D2F2E;max-width: 70%;">{{item.cusCode}}</view>
				</view>
				
				<view class="item">
					<view>{{$t('pages.总数量')}}：</view>
					<view style="color: #2D2F2E;max-width: 70%;">{{item.bzhiQi}}</view>
				</view>
				
				<view class="item">
					<view>{{$t('pages.储位')}}：</view>
					<view style="color: #2D2F2E;max-width: 70%;">{{item.tinId}}</view>
				</view>
				
				<view class="item">
					<view>{{$t('pages.托盘号')}}：</view>
					<view style="color: #2D2F2E;max-width: 70%;">{{item.binId}}</view>
				</view>
				
				<view class="btn" @click="preserve(item)">{{$t('下架')}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [],
				isFocus1: '',
				isFocus2: '',
				query01: '',
				query02: '',
				userName:''

			}
		},
		onLoad() {
			this.userName = uni.getStorageSync('login_user_info').userName || '';
		},
		methods: {
			getDetails() { // 获取下架列表
			    let params = {
					username: this.userName,
					searchstr: this.query01,
					Searchstr2: this.query02
				}
				this.$http.get('/jeewms/rest/pdaapi/wvGiNoticeController/list', {
					params
				}).then(res => {
					this.data = res.data.obj
					if(!this.data.length) {
						this.query01 = ''
						this.query02 = ''
					}
				})
			},
			
			preserve(item){	
				let data = { createBy: this.userName, orderIdI: item.id }
				let url =  `/jeewms/rest/pdaapi/wmToDownGoodsController/save?wmToDownGoodsstr=${JSON.stringify(data)}`
				let that = this
				that.goOn(data,url)
			},
			
			goOn(data,url){
				let that = this
				for (var key in data) {
					data[key] = String(data[key]).trim()
				}
				this.$http.post(url).then(res => {
					if (res.data.ok) {
						uni.showToast({title: '操作成功' ,icon:'none'})
						that.getDetails()
					} else {
						uni.showToast({title: res.data.errorMsg ,icon:'none'})
					}
				})
			},
			
			close() {
				this.query01 = ''
			},

		},
	}
</script>

<style scoped lang="less">
	.content {
		width: 100%;
		height: 100vh;
		background-color: #F3F4F6;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.Search {
			width: 100%;
			min-height: 101rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			view {
				position: relative;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			input {
				padding-left: 36rpx;
				width: 93%;
				height: 70rpx;
				background: #F3F4F6;
				border-radius: 30px;
				font-size: 28rpx;
				font-weight: 400;
			}

			.clear {
				position: absolute;
				top: 14px;
				right: 25px;
				width: 20px;
				height: 20px;
			}
		}

		.body_t {
			width: 92.53%;
			min-height: 500rpx;
			margin: 27rpx auto;
			background: #FFFFFF;
			border-radius: 10rpx;
			padding: 20rpx 33rpx;

			.item {
				width: 100%;
				height: 70rpx;
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #666666;
				justify-content: space-between;
			}

			.inputText {
				width: 100%;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 15rpx;

				text {
					font-size: 28rpx;
					font-weight: 400;
					color: #666666;
				}

				.inputText_it {
					width: 30%;
					height: 100%;
					border-radius: 10rpx;
					border: 1px solid #3297E2;
				}

				.inputText_itm {
					text-align: right;
					width: 47.5%;
					height: 60rpx;
					border-radius: 10rpx;
					border: 1px solid #3297E2;
					color: #3297E2;
				}
			}

			.btn {
				margin: 16rpx auto 16rpx;
				width: 90%;
				height: 76rpx;
				background: #3396E2;
				border-radius: 10px;
				font-size: 36rpx;
				line-height: 76rpx;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #FFFEFE;
			}
		}
	}
</style>
