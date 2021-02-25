<template>
	<view class="content">
		<text>姓名：{{name}}</text>
		<text>年龄：{{age}}</text>
		<text>性别：{{genderZh}}</text>
		<button @click='grow({year:growYear})'>成长</button>
		<button @click='growSlow({year:growSlowYear})'>缓慢成长（延迟两秒）</button>

		<u-button>按钮</u-button>
		<view>
			<u-icon name="lock" color="#2979ff" size="28"></u-icon>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions,
		mapGetters
	} from 'vuex'

	import service from '../../network/request'
	export default {
		data() {
			return {
				title: 'Hello',
				growYear: 2,
				growSlowYear: 2
			}
		},
		onLoad() {
			service.get('/dpc')
		},
		computed: {
			...mapState('login', ['name', 'age', 'gender']),
			...mapGetters('login', ['genderZh'])
		},
		methods: {
			...mapMutations('login', ['grow']),
			...mapActions('login', ['growSlow'])
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
	}
</style>
