<template>
    <div>
        <h1>Your decks {{ $route.params.id }} is active.</h1>
    </div>
</template>

<script>
export default {
     /* async */ validate ({ params }) { //context
        // console.log(context)
        
        // nhớ phải return trả về
        return /^[0-9]{9,12}$/.test(params.id)//(^) từ đầu. ($) đến cuối. [0-9] chỉ nhập số. {9,12} nhập từ 9-12 ký tự
    }
}
</script>